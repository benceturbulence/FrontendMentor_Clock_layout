const toggleBtn = document.getElementById('toggle')

const locationElement = document.getElementById('location')
const dayOfYearElement = document.getElementById('day-of-year')
const dayOfWeekEelement = document.getElementById('day-of-week')
const weekNumnerElement = document.getElementById('week-number')
const timeElement = document.getElementById('time')
const abbrevitationElement = document.getElementById('abbreviation')

const dayTimeIconElement = document.getElementById('daytime-icon')
const greetingElement = document.getElementById('greeting')
const wrapperElement = document.getElementsByClassName('wrapper')[0]

const quoteAuthor = document.getElementById('quote-author')
const quoteText = document.getElementById('quote-text')

const fetchQuoteBtn = document.getElementById('fetch-quote-icon')


toggleBtn.addEventListener('click', () => {
    wrapperElement.classList.toggle('expanded')
})


const fetchIP = async () => {
    let res = await (await fetch('http://worldtimeapi.org/api/ip')).json()
    dayOfYearElement.innerHTML=res.day_of_year
    dayOfWeekEelement.innerHTML = res.day_of_week
    locationElement.innerHTML = res.timezone
    weekNumnerElement.innerHTML = res.week_number
    abbrevitationElement.innerHTML = res.abbreviation

    const testTime = res.datetime.split('T')[1].split(':').slice(0,2)
    const timeString = testTime.join(':')
    
    timeElement.innerHTML = timeString
    adjustContent(testTime[0])
}

const fetchQuote = async () => {
    let res = await (await fetch('https://api.quotable.io/random')).json()
    quoteAuthor.innerHTML = res.author
    quoteText.innerHTML = res.content
}

fetchQuoteBtn.addEventListener('click', () => {
    fetchQuote()
})



fetchIP()
fetchQuote()

setInterval(()=>fetchIP(), 60000)

const adjustContent = (hourString) => {

    const hour = parseInt(hourString)

    if (hour > 5 && hour < 12){
        greetingElement.innerHTML = 'Good morning'
        
    }    else if ( hour < 18 ){
        greetingElement.innerHTML = 'Good afternoon'   
    }    else {
        console.log('Good evening')
        greetingElement.innerHTML = 'Good evening'
    }

    if (hour > 5 && hour < 18){
        wrapperElement.classList.remove('night')
        wrapperElement.classList.add('day')
        dayTimeIconElement.src='./img/icon-sun.svg'
    } else {
        wrapperElement.classList.remove('day')
        wrapperElement.classList.add('night')
        dayTimeIconElement.src='./img/icon-moon.svg'
    }
}
