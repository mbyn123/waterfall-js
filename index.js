// (function () {
//     var waterfall = function (options) {
//         const { el, column, gap,child } = options
//         this.el = document.getElementsByClassName(el)[0]
//         this.column = column
//         this.gap = gap
//         this.itemWidth = (this.el.offsetWidth - (this.column - 1) * this.column) / this.column
//         this.items = document.getElementsByClassName(child)
//         this.heightArr = []
//         this.init()

//     }

//     waterfall.prototype.init = function () {
//         var item = null,
//             minIndex = -1;
//         for (let i = 0; i < this.items.length; i++) {
//             item = this.items[i]
//             item.style.width = this.itemWidth + 'px'

//             if (i < this.column) {
//                 item.style.top = '0px'
//                 item.style.left = i * (this.itemWidth + this.gap) + 'px'
//                 this.heightArr = [...this.heightArr, item.offsetHeight]
//             } else {
//                 minIndex = getMInIndex(this.heightArr)
//                 item.style.top = this.heightArr[minIndex] + 'px'
//                 item.style.left =this.items[minIndex].offsetLeft + 'px'
//                 this.heightArr[minIndex] += item.offsetHeight + this.gap   
//                 console.log(getMInIndex(this.heightArr));
//             }
//         }
//         console.log(this.heightArr)

//     }

//     function getMInIndex (arr) {
//         return arr.indexOf(Math.min.apply(null, arr))
//     }

//     window.waterfall = waterfall
// })()

(function () {
    class waterfall {
        constructor(options) {
            const { el, column, gap, child } = options
            this.el = document.getElementsByClassName(el)[0]
            this.column = column
            this.gap = gap
            // 当前最后-列图片的高度
            this.heightArr = []
            // 计算每张图片的宽度
            this.itemWidth = (this.el.offsetWidth - (this.column - 1) * this.gap) / this.column
            // 获取所有的图片Dom
            this.items = document.getElementsByClassName(child)
            this.init()
        }

        init () {
            let item = null,
                minIndex = -1;
            for (let i = 0; i < this.items.length; i++) {
                item = this.items[i]
                item.style.width = this.itemWidth + 'px'
                // 设置第一列的位置
                if (i < this.column) {
                    item.style.top = '0px'
                    item.style.left = i * (this.itemWidth + this.gap) + 'px'
                    this.heightArr = [...this.heightArr, item.offsetHeight]
                } else {

                    minIndex = waterfall.getMinIndex(this.heightArr)
                    item.style.top = this.heightArr[minIndex] + this.gap + 'px'
                    item.style.left = this.items[minIndex].offsetLeft + 'px'
                    this.heightArr[minIndex] += item.offsetHeight + this.gap
                }
            }
        }
        // 获取每一列高度最低图片的下标 
        static getMinIndex (arr) {
            return arr.indexOf(Math.min(...arr))
        }
    }
    window.waterfall = waterfall
})()