(function () {

  window.requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (f) {
      return setTimeout(f, 1000 / 60)
    } // simulate calling code 60 

  window.cancelAnimationFrame = window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    function (requestID) {
      clearTimeout(requestID)
    } //fall back

  function SlideToDo(options) {
    this.parent = document.querySelector(options.parent)
    this.target = options.target
    this.action = options.action
    this.slideAction = options.slideAction
    this.buttonWidth = options.buttonWidth || 70
    this.$decorateStyle = this.decorateStyle
    this.init()
  }

  SlideToDo.prototype = {
    constructor: SlideToDo,
    init: function () {
      this.decorateStyle(this.target, this.parent)
      this.bind(this.parent, 'click', this.slideAction.bind(this))
      this.bind(this.parent, 'touchstart', this.touchStart.bind(this))
      this.bind(this.parent, 'touchmove', this.touchMove.bind(this))
      this.bind(this.parent, 'touchend', this.touchEnd.bind(this))

    },
    bind: function (target, type, action) {
      if (target.addEventListener) {
        target.addEventListener(type, action, false)
      } else if (target.attachEvent) {
        target.attachEvent('on' + type, action.bind(target))
      } else {
        target['on' + type] = action
      }
    },
    touchStart: function (evt) {

      var targetElement = isChildOfSlide(evt.target)
      if (!targetElement) {
        this.targetElement = null; // 阻止touchend
        return false; // 只阻止touchmove
      }

      if (evt.targetTouches.length > 1) {
        return false;
      }

      this.targetElement = targetElement;

      if (this.targetElement !== this.lastTargetElement && this.lastTargetElement) {
        this.scrollBackButtonSpecial(this.lastTargetElement, this.lastTargetElement.nextElementSibling)
      }

      var touch = evt.targetTouches[0];

      this.touchStartX = touch.pageX;
      this.touchStartY = touch.pageY;
      this.slideAction = this.targetElement.nextElementSibling;
      this.LastTargetLeft = this.targetElement.offsetLeft; // 上一次点击左边距离
      this.LastSlideActionright = Number(this.slideAction.style.right.replace(/px/g, ''))
      this.stopAutoScroll = true // 停止setTimeout自动滚动
    },
    touchMove: function (evt) {
      if (this.targetElement !== isChildOfSlide(evt.target)) {
        this.targetElement = null;
        return false; //
      }

      var touch = evt.targetTouches[0];
      var moveX = touch.pageX;

      var newLeft = this.LastTargetLeft + moveX - this.touchStartX;
      if (newLeft < 0) {
        this.targetElement.style.left = Math.abs(newLeft) > this.buttonWidth ? -1 * this.buttonWidth + 'px' : newLeft + 'px';
      } else {
        this.targetElement.style.left = '0px'
      }

      var slideRight = this.LastSlideActionright + this.touchStartX - moveX;
      if (slideRight < 0) {
        this.slideAction.style.right = Math.abs(slideRight) > 70 ? '-70px' : slideRight + 'px';
      } else {
        this.slideAction.style.right = '0px'
      }

      return true;
    },
    touchEnd: function (evt) {
      if (!this.targetElement) {
        return;
      }

      if (Math.abs(this.LastTargetLeft - this.targetElement.offsetLeft) <= 10) {
        this.targetElement.style.left = this.LastTargetLeft + 'px'
        this.slideAction.style.right = this.LastSlideActionright + 'px'
        return false;
      }

      this.stopAutoScroll = false // 取消停止setTimeout自动滚动

      this.lastTargetElement = this.targetElement; // 缓存

      if (this.LastTargetLeft < this.targetElement.offsetLeft) {
        this.scrollBackButton();
      } else {
        this.scrollShowButton(this.targetElement, this.slideAction);
      }
    },
    decorateStyle: function (target, parent) {
      var SlideBtn = '<a class="slideAction" style="background: #e84747;color: white;width: 70px;position: absolute;height: 100%;text-align: center;right: -70px;top: 0;display: flex;align-items: center;justify-content: center;">删除</a>'
      var targets = parent.querySelectorAll(target)
      for (var i = 0, length = targets.length; i < length; i++) {
        var height = targets[i].offsetHeight
        targets[i].outerHTML = '<div style="position: relative;overflow: hidden;height:' + height + 'px;"><div class="slideTarget" style="position: absolute;width: 100%;">' + targets[i].outerHTML + '</div>' + SlideBtn + '</div>'
      }
    },
    slideAction: function (evt) {
      evt.stopImmediatePropagation()
      var className = evt.target.getAttribute('class')
      if (className && className.indexOf('slideAction') > -1) {
        this.action.call(evt.target, this.decorateStyle.bind(this, this.target, this.parent))
      }
    },
    scrollBackButton: function () {
      var self = this
      var slideActionRight = Number(this.slideAction.style.right.replace(/px/g, ''));
      this.animationId = requestAnimationFrame(function () {
        cancelAnimationFrame(self.animationId)
        if (self.targetElement && self.targetElement.offsetLeft <= 0 && !self.stopAutoScroll) {
          self.targetElement.style.left = ++self.targetElement.offsetLeft + 'px'
          self.slideAction.style.right = (slideActionRight--) + 'px'
          self.animationId = requestAnimationFrame(arguments.callee)
        }
      })
    },
    scrollShowButton: function (target, slideAction) { 
      var self = this
      var slideActionRight = Number(slideAction.style.right.replace(/px/g, ''));
      this.animationId = requestAnimationFrame(function () {
        cancelAnimationFrame(self.animationId)

        if (target && target.offsetLeft >= -1 * self.buttonWidth && !self.stopAutoScroll) {
          target.style.left = --target.offsetLeft + 'px'
          slideAction.style.right = (slideActionRight++) + 'px'
          self.animationId = requestAnimationFrame(arguments.callee)
        }
      })
    },
    scrollBackButtonSpecial: function (target, slideAction) {
      var self = this
      this.timeoutSpeciId = requestAnimationFrame(function () {
        cancelAnimationFrame(self.timeoutSpeciId)
        var slideActionRight = Number(slideAction.style.right.replace(/px/g, ''));
        if (target && target.offsetLeft <= 0) {
          target.style.left = 3 + target.offsetLeft + 'px'
          slideAction.style.right = (slideActionRight - 3) + 'px'
          self.timeoutSpeciId = requestAnimationFrame(arguments.callee)
        }
      })
    }
  }

  function isChildOfSlide(child) {
    var className = child.getAttribute('class')
    if (className && className.indexOf('slideTarget') > -1) {
      return child
    } else if (child.parentElement.getAttribute('class') && child.parentElement.getAttribute('class').indexOf('slideTarget') > -1) {
      return child.parentElement
    } else if (child.parentElement !== document.body) {
      return isChildOfSlide(child.parentElement)
    } else {
      return false
    }
  }

  function fixParentLength(parent) {
    if (parent.childElementCount > 0) {
      var height = parent.children[0].offsetHeight
      parent.style.height = height * parent.childElementCount + 'px'
    }
  }

  if (exports === 'object' && typeof module !== 'undefined')
    module.exports = SlideToDo
  if (typeof define === 'function' && define.amd)
    define(function () {
      return SlideToDo
    })
  else
    window.SlideToDo = SlideToDo;


})();
