import React from 'react';

const Blog = () => {
    return (
        <section>
            <div className='grid grid-cols-1 gap-24 md:grid-cols-1'>
                <div>
                    <h1 className='mb-6 text-2xl font-light text-gray-900 md:text-3xl'>
                        Basic Questions
                    </h1>
                    <p className='mt-10 mb-3 font-semibold text-gray-900'>
                        What is Context api works on?
                    </p>
                    <p className='text-gray-600'>
                        Context api is most popular react function to make flexibility for data flow.Context api provides a way to pass data through the component tree without having to pass props down manually at every level.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.It's create flexibility to build user interface.
                    </p>
                    <p className='mt-10 mb-3 font-semibold text-gray-900'>
                        what is semantic tag?
                    </p>
                    <p className='text-gray-600'>
                        Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation.The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content. For example, a <>h</> tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.
                    </p>
                    <p className='mt-10 mb-3 font-semibold text-gray-900'>
                        Difference between inline and inline-block elements?
                    </p>
                    <p className='text-gray-600'>
                        Inline elements can begin within a line of the html element and it never start a new line for the html.Blocks elements can not begin within a line of  the html element and it always starts the new line of the html.Inline element can break among the lines.Block element cannot break among the lines.Inline element create small structure and sipport mostly the files with small structure.Block element create large structure when compared with inline element and easily support large files.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Blog;