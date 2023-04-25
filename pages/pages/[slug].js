// import fs from 'fs';
// import matter from 'gray-matter';
// import { remark } from 'remark';
// import html from 'remark-html';

// export async function getPostData(slug) {
//   const fileContents = fs.readFileSync(`/lib/pages/${slug}.md`, 'utf8');

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);

//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark().use(html).process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   // Combine the data with the slug and contentHtml
//   return {
//     slug,
//     contentHtml,
//     ...matterResult.data,
//   };
// }

// export async function getStaticPaths() {
//   const slugs = fs.readdirSync('/lib/pages').map((file) => file.replace('.md', ''));

//   const paths = slugs.map((slug) => ({ params: { slug } }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const { slug } = params;
//   const postData = await getPostData(slug);

//   return {
//     props: {
//       postData,
//     },
//   };
// }

// export default function Post({ postData }) {
//   return (
//     <>
//       {postData.title}
//       <br />
//       {postData.id}
//       <br />
//       {postData.date}
//       <br />
//       <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
//     </>
//   );
// }