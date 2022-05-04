import React from "react";
import CardComponent from "../../../components/Card/CardComponent";
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';

const contactData = [{
  id:"1",
  image: image1,
  title: 'Contact Specialist',
  phone: '+49 123 4567 890' 
},
{
  id:"2",
  image: image2,
  title: 'Contact Specialist',
  phone: '+49 123 4567 890' 
},
{
  id:"3",
  image: image3,
  title: 'Contact Specialist',
  phone: '+49 123 4567 890' 
},
{
  id:"4",
  image: image4,
  title: 'Contact Specialist',
  phone: '+49 123 4567 890' 
}]

export default function Contact() {
  const title = "Contact Detail";
  const subTitle = "Overview";
  return <CardComponent 
    title={title} 
    subTitle={subTitle} 
    contacts 
    contactData={contactData}
  />;
}
