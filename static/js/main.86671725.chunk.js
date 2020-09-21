(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{34:function(e,t,a){e.exports=a(44)},39:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(14),r=a.n(c),l=(a(39),a(29)),i=a(9),s=a(10),u=a(13),d=a(12),m=a(11),h=(a(21),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).inputValue={todo:""},e.state=e.inputValue,e.handleInput=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(m.a)({},n,o))},e.handleOnSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.setState(e.inputValue)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.todo;return o.a.createElement("form",{onSubmit:this.handleOnSubmit},o.a.createElement("input",{type:"text",name:"todo",id:"todo",value:e,onChange:this.handleInput,required:!0}),o.a.createElement("button",{type:"submit"},"Add"))}}]),a}(o.a.Component)),f=a(26),p=a(30),v=a(4),E=a(25),b=a(66),O=a(65),S=Object(v.a)({root:{color:E.a[400],"&$checked":{color:E.a[600]}},checked:{}})((function(e){return o.a.createElement(O.a,Object.assign({color:"default"},e))}));function g(){var e=o.a.useState({checkedG:!1}),t=Object(p.a)(e,2),a=t[0],n=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{control:o.a.createElement(S,{id:"checkbox1",checked:a.checkedG,onChange:function(e){n(Object(f.a)(Object(f.a)({},a),{},Object(m.a)({},e.target.name,e.target.checked)))},name:"checkedG"}),label:"Complete"}))}var k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={onEdit:!1,editVal:e.props.item},e.myRef=o.a.createRef(),e.onRemove=function(){e.myRef.current.className="active",setTimeout((function(){e.props.handleDelete()}),200)},e.handleEditValue=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(m.a)({},n,o))},e.onEdit=function(){e.setState({onEdit:!0})},e.handleCancel=function(){""===e.state.editVal&&e.setState({editVal:e.props.item}),e.setState({onEdit:!1})},e.handleSave=function(){var t=e.state.editVal;""===t?e.setState({editVal:e.props.item}):e.props.handleEdit(t,e.props.id),e.setState({onEdit:!1})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.item;return this.state.onEdit?o.a.createElement("li",null,o.a.createElement("input",{type:"text",value:this.state.editVal,name:"editVal",id:"editVal",onChange:this.handleEditValue}),o.a.createElement("div",{className:"row"},o.a.createElement("i",{className:"fa fa-check",title:"Save",onClick:this.handleSave}),o.a.createElement("i",{className:"fa fa-times",title:"Cancel",onClick:this.handleCancel}))):o.a.createElement("li",{ref:this.myRef}," ",e,o.a.createElement("div",{className:"row"},o.a.createElement(g,{className:"checkboxes"}),o.a.createElement("i",{className:"fa fa-pencil",title:"Edit",onClick:this.onEdit}),o.a.createElement("i",{className:"fa fa-trash-o",title:"Delete",onClick:this.onRemove})))}}]),a}(o.a.Component),j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.todo,a=e.onDelete,n=e.onEdit,c=e.count;return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",null,t.map((function(e,t){return o.a.createElement(k,{item:e.todo,key:t,handleDelete:function(){a(t)},handleEdit:n,id:t})}))),o.a.createElement("h6",null,"You have ",c," tasks "))}}]),a}(o.a.Component),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={data:[]},e.handleSubmit=function(t){e.setState({data:[].concat(Object(l.a)(e.state.data),[t])})},e.handleRemove=function(t){var a=e.state.data;e.setState({data:a.filter((function(e,a){return a!==t}))})},e.handleOnEdit=function(t,a){var n=e.state.data;n.forEach((function(e,n){n===a&&(e.todo=t)})),e.setState({data:n})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(){localStorage.setItem("dataStore",JSON.stringify(this.state.data))}},{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("dataStore"));null!==e&&this.setState({data:e})}},{key:"render",value:function(){var e=this.state.data;return console.log(e),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"app"},o.a.createElement("h1",null,"To-do List"),o.a.createElement(h,{onSubmit:this.handleSubmit}),0===e.length?o.a.createElement("h4",null,"Enter Tasks to Begin"):o.a.createElement(j,{todo:e,onDelete:this.handleRemove,onEdit:this.handleOnEdit,count:e.length})),o.a.createElement("a",{href:"https://www.saifux96.wordpress.com",className:"footer"},"Check my UX page here"))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.86671725.chunk.js.map