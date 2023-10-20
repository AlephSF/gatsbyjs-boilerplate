import * as React from 'react';

const Page = ({ serverData }) => {
  const { title } = serverData;
  return <div>Job Title: {title}</div>;
};
 
export async function getServerData(props) {
  try {
    const res = await fetch(`https://boards-api.greenhouse.io/v1/boards/ripple/jobs/5362028`)
    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
 
export default Page;