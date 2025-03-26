import React from 'react'
import Guideline from '../../Shared/Components/AuthorGuideline/Guideline'
import HelmetComponent from '../Helmet/HelmetProvider'

function GuidelinePage() {
    return (
        <>
            <HelmetComponent title="Author Guidelines - International Journal of Quantum Computing and AI" />
            <Guideline />
        </>
    )
}

export default GuidelinePage
