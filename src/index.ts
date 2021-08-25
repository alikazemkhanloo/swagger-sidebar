
const titles = document.querySelectorAll('.opblock-tag-section')
console.log(titles);
const reactroot = document.querySelector('[data-reactroot].swagger-ui') as Node
const container  = document.querySelector('#swagger-ui')
const sidebar = document.createElement('ul')
sidebar.className='nav'
function onExpand(node: Element){
    return function(){
        if(node.classList.contains('open')){
            node.classList.remove('open')
            node.classList.add('close')
        }else{
            node.classList.remove('close')
            node.classList.add('open')
        }   
    }
}
titles.forEach(element => {
    const li = document.createElement('li')
    li.className='nav item close'
    const domElement = element.querySelector('.opblock-tag') as Element
    const text = domElement?.textContent?.trim() || ''
    const a = document.createElement('a')
    // a.href=`#${domElement.id}`
    
    a.appendChild(document.createTextNode(text))
    const temp = document.createElement('div')
    temp.onclick = onExpand(li)
    temp.appendChild(a)
    temp.className='link'
    li.appendChild(temp)
    console.log(li);
    
    const apiItems = element.querySelectorAll('.opblock')
    const sublist = document.createElement('ul')
    sublist.className='apiList'
    apiItems.forEach(e=>{
        const method = e.querySelector('.opblock-summary-method')?.textContent?.trim()
        const path = e.querySelector('.opblock-summary-path')?.textContent?.trim()
        const id = e.id
        const description = id.split('-')[2]
        const apiPoint = document.createElement('li')
        apiPoint.className='apiListItem'
        const a = document.createElement('a')
        a.href=`#${id}`
        a.className='apiLink'
        a.appendChild(document.createTextNode(description))
        apiPoint.appendChild(a)
        sublist.appendChild(apiPoint)
    })
    li.appendChild(sublist)
    sidebar.appendChild(li)
});
container?.insertBefore(sidebar, reactroot)