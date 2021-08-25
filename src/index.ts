
const titles = document.querySelectorAll('.opblock-tag-section')
console.log(titles);
const reactroot = document.querySelector('[data-reactroot].swagger-ui') as Node
const container  = document.querySelector('#swagger-ui')
const sidebar = document.createElement('ul')
sidebar.className='nav'
titles.forEach(element => {
    const li = document.createElement('li')
    li.className='nav item'
    const domElement = element.querySelector('.opblock-tag') as Element
    const text = domElement?.textContent?.trim() || ''
    const a = document.createElement('a')
    a.href=`#${domElement.id}`

    a.appendChild(document.createTextNode(text))
    li.appendChild(a)
    const apiItems = element.querySelectorAll('.opblock')
    console.log(apiItems);
    const sublist = document.createElement('ul')

    apiItems.forEach(e=>{
        const method = e.querySelector('.opblock-summary-method')?.textContent?.trim()
        const path = e.querySelector('.opblock-summary-path')?.textContent?.trim()
        const id = e.id
        const description = id.split('-')[2]
        const apiPoint = document.createElement('li')
        const a = document.createElement('a')
        a.href=`#${id}`
        a.appendChild(document.createTextNode(description))
        apiPoint.appendChild(a)
        sublist.appendChild(apiPoint)
    })
    li.appendChild(sublist)
    sidebar.appendChild(li)
});
container?.insertBefore(sidebar, reactroot)