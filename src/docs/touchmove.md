# touchmove
![image](https://github.com/KuangPF/Web-Plugin/blob/master/static/index/touchmove.gif)
### HTML5触摸事件
    touchstart:当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发。
    touchmove事件：当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可以阻止滚动。
    touchend事件：当手指从屏幕上离开的时候触发。
#### touch对象
触发触摸事件后会返回一个touch对象e，e包含了以下属性
- clientX：触摸目标在视口中的x坐标。
- clientY：触摸目标在视口中的y坐标。
- identifier：标识触摸的唯一ID。
- pageX：触摸目标在页面中的x坐标。
- pageY：触摸目标在页面中的y坐标。
- screenX：触摸目标在屏幕中的x坐标。
- screenY：触摸目标在屏幕中的y坐标。
- target：触目的DOM节点目标。

当触发`touchend`事件的时候计算出最近一次滑动开始和结束时x坐标的之差distance(STOP_X - START_X) `distance < 0 ? slideLeft():slideRight() `
