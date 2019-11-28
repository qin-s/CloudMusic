import React from 'react'
export function guardRouter(MY){
    // return One
    class App extends MY{
        UNSAFE_componentWillMount(){   //高阶组件写拦截
            if(localStorage.id){
                console.log(1111)
            }else{
                console.log(2222)
            }
        }
      render(){
        return(
          <div>
              <MY></MY>
              我是高阶组件


          </div>
        )
      }
    }
    return App
  }