function h(o,s,f){const t=Math.floor(o/s),u=o%s,n=[];return t>0&&n.push(o-s),t<f-1&&n.push(o+s),u>0&&n.push(o-1),u<s-1&&n.push(o+1),n}export{h as n};
