import React from 'react';
import NewsPage from '../../components/widgets/news';

function index(props) {
    return (
        <div>
            <NewsPage />

            <footer className="bg-white mb-8" aria-labelledby="footer-heading">

                <div className="mt-12 border-t border-warm-gray-200 pt-8">
                    <p className="text-base text-warm-gray-400 xl:text-center">
                        &copy; {new Date().getFullYear()} Sharp Valley Holdings Co. All rights reserved.
                    </p>
                </div>

            </footer>
        </div>
    );
}

export default index;