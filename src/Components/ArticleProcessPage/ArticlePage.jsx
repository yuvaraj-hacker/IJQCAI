import React from 'react'
import ArticleProcess from '../../Shared/Components/ArticleProcessing/ArticleProcess'
import HelmetComponent from '../Helmet/HelmetProvider'

function ArticlePage() {
    return (
        <>
            <HelmetComponent title="Article Processing - International Journal of Quantum Computing and AI" />
            <ArticleProcess />
        </>

    )
}

export default ArticlePage
