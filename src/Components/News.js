import NewsItem from './NewsItem'
import React, { Component } from 'react'

export default class News extends Component {
articles =  [
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Trump threatens to blow up 'entirety' of  major Iran gas field if it attacks Qatar again",
      "description": "The attacks led to a spike of more than 25% in gas prices in Europe on Thursday.",
      "url": "https://www.bbc.co.uk/news/articles/c93j37egjdeo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/1c70/live/652707c0-2318-11f1-83bb-2f220ea2da92.jpg",
      "publishedAt": "2026-03-19T11:37:21.037429Z",
      "content": "In his strongly-worded social media post early on Thursday, Trump said \"Qatar was in no way, shape, or form, involved with\" Israel's attack on the Iranian gas field, and Iran's retaliatory attacks on… [+1903 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Cyprus president calls for frank discussion on UK's 'colonial' bases",
      "description": "The UK's two military bases on Cyprus are a \"colonial consequence\" on the island, says President Nikos Christodoulides.",
      "url": "https://www.bbc.co.uk/news/articles/cy7166denxeo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/246b/live/cad7d570-237e-11f1-bdf1-7b521ec55fd1.jpg",
      "publishedAt": "2026-03-19T11:37:16.975946Z",
      "content": "Akrotiri and Dhekelia make up 98 sq miles (254 sq km) of Cyprus and are a significant source of employment.\r\n\"We have more than 10,000 Cypriot citizens within the British bases. We have responsibilit… [+717 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "US intelligence chief Tulsi Gabbard says Iran's regime 'intact' but 'degraded'",
      "description": "Lawmakers pressed intelligence officials about the Iran war, and if the Islamic Republic had posed an imminent threat.",
      "url": "https://www.bbc.co.uk/news/articles/c1d6dk569w6o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/138f/live/926aeab0-22ed-11f1-abe1-05da6de99c2b.jpg",
      "publishedAt": "2026-03-19T11:22:22.0985291Z",
      "content": "\"The IC [intelligence community] assesses the regime in Iran appears to be intact, but largely degraded due to attacks on its leadership and military capabilities,\" she said.\r\nAppearing alongside the… [+3308 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Kevin Spacey and accusers settle before civil trial",
      "description": "The actor agrees an out-of-court settlement with three men who accused him of sexual assault.",
      "url": "https://www.bbc.co.uk/news/articles/c5ygyypy7pro",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/4ede/live/12ebab60-caed-11f0-b98a-b90b4f2123a5.jpg",
      "publishedAt": "2026-03-19T10:22:21.3282991Z",
      "content": "Two of the men who accused the Oscar-winning star during the criminal trial also filed civil legal cases at the High Court.\r\nOne man, known only as LNP, alleged that Spacey \"deliberately assaulted\" h… [+1011 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Police investigating bailout email from Mandelson to Epstein",
      "description": "Met chief Sir Mark Rowley says police are looking at whether the email was a criminal offence.",
      "url": "https://www.bbc.co.uk/news/articles/c4g8ggelrd5o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/7fde/live/9cda00e0-2373-11f1-8f74-5f782ec9b448.jpg",
      "publishedAt": "2026-03-19T10:22:17.4542667Z",
      "content": "Sir Mark told ABC News: \"As we've said publicly with Peter Mandelson, the former ambassador, there is a particular e-mail to do with bailouts after the financial crash in the sort of, I think 2008-20… [+1160 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Anal cancer: Woman left in pain six years after radiotherapy treatment",
      "description": "Trish Prosser was too embarrassed to tell loved ones about the type of cancer she had as she felt there was a stigma surrounding anal cancer.",
      "url": "https://www.bbc.co.uk/news/articles/c5yq1yg9ldwo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/43a5/live/1f691660-221e-11f1-ba1b-c11f35d24abc.jpg",
      "publishedAt": "2026-03-19T09:52:23.1589957Z",
      "content": "Radiotherapy UK with the GI clinical oncology team at the Belfast Health and Social Care Trust have said they want to start a conversation on what is regarded as one of the most under-talked-about ca… [+1135 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Designer dog crossbreeds show more 'undesirable' behaviours, vets say",
      "description": "The Royal Veterinary College says popular \"doodle\" dogs do not always behave as expected.",
      "url": "https://www.bbc.co.uk/news/articles/cwyx81517jxo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/05a3/live/e0e1c3c0-1c8b-11f1-bbce-43d195bf2b4f.jpg",
      "publishedAt": "2026-03-19T07:22:21.3967712Z",
      "content": "The results showed designer doodles differed from their purebred parents in just over half of all comparisons. \r\nResearchers looked at problem behaviour such as a fear of traffic or loud noises, sepa… [+1431 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "How the Iran war has left Europe facing yet another energy crisis",
      "description": "It is not the first time that there has been deep energy-linked frustration in the heart of Europe.",
      "url": "https://www.bbc.co.uk/news/articles/c24de9e97vno",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/2972/live/788f41d0-22b7-11f1-a79a-77e93010d956.jpg",
      "publishedAt": "2026-03-19T06:52:23.3130199Z",
      "content": "A number of EU member states, including Spain, Sweden and Denmark have made clear their belief that weakening the ETS would penalise companies that have sought to modernise and become greener and rew… [+1498 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Child seen in sex abuse videos identified after researcher spots school badge",
      "description": null,
      "url": "https://www.bbc.co.uk/news/articles/cvgj22e7qwyo",
      "urlToImage": null,
      "publishedAt": "2026-03-19T04:07:06.1266531Z",
      "content": null
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "World's longest coastal path opens in England to the public",
      "description": "The King Charles coastal path will allow walkers right of access to the entire coast for the first time.",
      "url": "https://www.bbc.co.uk/news/articles/cy0dxexdd8xo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/b6dc/live/abd7cc00-22fe-11f1-b297-95b0a0a8331e.jpg",
      "publishedAt": "2026-03-19T03:07:19.5991635Z",
      "content": "A new footpath stretching around the entire coast of England is being officially inaugurated later.\r\nAt 2,689 miles long, it is the longest managed coastal walking route in the world, according to Na… [+828 chars]"
    }
  ]
   
  constructor() {
    super();
    this.state = {
      articles : this.articles,
      loading  : false
    }
  }

 
  render() {
    return (
      <div className="container my-4  ">
        <div className='row row-gap-4'>
          {this.state.articles.map((element)=>{
          return <NewsItem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url}/>
          })}
        </div>
      </div>
    )
  }
}
