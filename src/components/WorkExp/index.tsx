import { Typography } from '@material-ui/core';
import BasicTimeline from '../Unknown/BasicTimeline';


interface WorkExpProps {
  items?: Array<object>;  
}

const WorkExp: React.FC<WorkExpProps> = (props) => {
  const { items } = props;
  return (
    <>
      <BasicTimeline items={ items }/>
      </>
  )
}

WorkExp.defaultProps = {
  items: [
    {
      title: 'PROJECT EXPERIENCE',
      color: '#5ba99d'
    },
    {
      name: 'NDA project',
      descr: 'A platform for helping lawyers work, which provides fast processing and sorting of letters, as well as automatic creation of events that correspond to them. Frontend, backend, writing, integration with the Stripe payment system.',
      technology: 'React, Typescript, Apollo GraphQL, Stripe, Jest, MongoDB, Material UI.'
    },
    {
      name: 'NDA project',
      descr: 'A mobile app for people who want to instill new habits and compete with friends.',
      technology: 'React Native, Redux, Node.js, MySQL, Stripe, PayPal, Braintree, Apple Healthkit, AWS SES, TypeScript'
    },
    {
      name: 'NDA project',
      descr: 'Platform for working with the elderly, daily schedule, monitoring of taking medications, walks. Writing frontend and cloud functions of firebase.',
      technology: 'React, Redux, Firebase – Cloud Function, Firebase – Firestore, Material UI.'
    },
    {
      name: 'NDA project',
      descr: 'Internal project. Website for the company.',
      technology: 'Next.js, TypeScript, GraphQL, Prismic'
    },
    {
      name: 'NDA project',
      descr: 'Online store of goods. Delivered additional features for frontend and backend parts of the platform.',
      technology: 'Next.js, Node.js, Stripe, AWS Amplify, AWS Cognito, AWS DynamoDB, AWS Lambda, AWS API Gateway, Terraform'
    },
    {
      title: 'EDUCATION',
      color: '#d3704f'
    },
    {
      name: 'June 2020 - October 2020 | Ukraine (Kyiv)',
      descr: 'IT Bootcamp Fullstack developer',
      technology: 'IT Courses "GoIT"'
    },
    {
      name: 'Septermber 2014 - June 2018 | Ukraine',
      descr: `Computer scientist Bachelor's degree`,
      technology: 'Vasyl’ Stus Donetsk National University'
    },
  ],
}
export default WorkExp