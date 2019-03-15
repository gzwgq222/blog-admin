import React from 'react'

class Article extends React.Component {
  componentDidMount () {
    var mathLib = {
      pi: 3.14,
      area: function(r, h) {
          return this.pi * r * r * h
      },
      circumference: function(r) {
          return 2 * this.pi * r;
      }
    }
    console.log(mathLib.area.call({pi: 1}, 2, 3))
    console.log(mathLib.area.apply({pi: 1}, [2, 2]))
    function foo () {
      console.log(this.a)
    }
    const food = {
      a: 'this is me'
    }
    foo.apply(food)
    // 去重
    const arr = [1, 1, 4, 2, 3, 8, 4]
    const newArr = (agr) => {
      return agr.reduce((pre, cur) => {
        if (pre.includes(cur)) {
          return pre
        } else {
          return pre.concat(cur)
        }
      }, [])
    }
    const val = newArr(arr)
    console.log('reduce: ', val)
    console.log('set: ', [...new Set(arr)])
    console.log('set: ', Array.from(new Set(arr)))
    // 判断重复次数
    const num = (agr) => {
      return agr.reduce((pre, cur) => {
        if (cur in pre) {
          pre[cur] ++
        } else {
          pre[cur] = 1
        }
        return pre
      }, {})
    }
    console.log(num(arr))
    // 多维数组扁平化
    const flatArr = [[0, 1], [2, 3], [4,[5,6,7]]]
    function flat(arr) {
      return arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? flat(cur) : cur), [])
    }
    console.log('flat: ', flat(flatArr))
  }
  render() {
    return (
      <div>
        <p>info</p>
      </div>
    )
  }
}
export default Article