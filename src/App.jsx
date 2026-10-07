
import React from 'react'
import Card from './Component/Card.jsx'


const App = () => {

     
const jobOpenings = [
  {
    brandlogo: "data:image/jpeg;base64,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",
    companyname: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Bengaluru, India"
  },
  {
    brandlogo: "data:image/png;base64,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",
    companyname: "Amazon",
    datePosted: "1 week ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT886jjZmjyXf-GrWL0pvVT3Psmo-A0Sd2UbPjskOO-_Q&s=10",
    companyname: "Microsoft",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWNa8JexiB9vPvHGuqDgplNMELp_Bd7n0OFrPEsp72A&s=10",
    companyname: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Bengaluru, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGmEjXZmsB-2HC5di5yBrBEs5LVzcG4KaBs97EndWaA&s",
    companyname: "Apple",
    datePosted: "4 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVrjNLdc96EC-wh8zkwU27CUTvRisRZ2VK5WVPpCtbvA&s=10",
    companyname: "Netflix",
    datePosted: "10 weeks ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQfBJMStSlT-jUeamk8UChYf8W3JjBlft9wgOTmyZ7CQ&s=10",
    companyname: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Pune, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSa5sAEUmQiNEvvmJIcLe5FknjgrwKfaVGRtwUrFKaA&s=10",
    companyname: "Tesla",
    datePosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$58/hr",
    location: "Bengaluru, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZUiCW724Laptk2ias7MFvWlE6qXrxxN57nvg1mkbj_w&s=10",
    companyname: "Adobe",
    datePosted: "2 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Noida, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfrBvk0U-J1mZ08lbhnhp3Q6W7uWk43VwfFfZroxdPLw&s",
    companyname: "Salesforce",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$62/hr",
    location: "Hyderabad, India"
  }
];


  return (
    <div className="parent">
       {jobOpenings.map(function(ele,idx){
         



        return <div key={idx}>
          <Card companyname={ele.companyname} datePosted={ele.datePosted} post={ele.post} tag1={ele.tag1} location={ele.location} 
           brandlogo={ele.brandlogo} pay={ele.pay} tag2={ele.tag2}/>
       
       </div>
       })}
     
    </div>
  )
}

export default App

