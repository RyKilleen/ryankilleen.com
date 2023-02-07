
// We import object and document schemas
import blockContent from "./blockContent";
import category from "./category";
import interest from "./interest";
import book from "./book";
import post from "./post";
import author from "./author";

// Then we give our schema to the builder and provide the result to Sanity
export default [
  // The following are document types which will appear
  // in the studio.
  post,
  author,
  category,
  book,
  interest,
  // When added to this list, object types can be used as
  // { type: 'typename' } in other document schemas
  blockContent,
]
