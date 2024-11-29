import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypecard } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { SanityLive } from "@/lib/live";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: "string" }>;
}) {
  const query = (await searchParams).query;
  const params = {search:query || null}
  // const posts = await client.fetch(STARTUPS_QUERY)
  const {data:posts} = await sanityFetch({query:STARTUPS_QUERY,params})
 
//   const posts = [{
//      _createdAt: new Date(),
//      views:55,
//      author: {_id:1,name:'Adriano'},
//      _id: 1,
//      description: "This is a description",
//      image:" https://img.freepik.com/premium-vector/modern-business-social-media-post-design-template_627383-565.jpg?w=740",
//      category:"Robots",
//      title: "We Robots"
//   },
// ]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Statrtup,
          <br />
          Connect With Entrepreneurs{" "}
        </h1>
        <p className="sub-heading !max-w-3xl    ">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {
            query? `Search result for "${query}"`:'All Startups'
          }

        </p>
   <ul className=" mt-7 card_grid">
  {
      posts.length > 0 ? (
        posts.map((post:StartupTypecard, index:number)=>(
          <StartupCard key={post?._id} post={post}/>
        ))
      ):(
        <p className="no-results">No startups found</p>
      )
  }
   </ul>
      </section>
      <SanityLive/>
    </>
  );
}
