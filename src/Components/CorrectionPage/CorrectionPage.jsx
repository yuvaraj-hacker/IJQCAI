import React from 'react'
import Correction from '../../Shared/Components/Correction/Correction'
import HelmetComponent from '../Helmet/HelmetProvider'

function CorrectionPage() {
    return (
        <>
            <HelmetComponent title="Correction - International Journal of Quantum Computing and AI" />
            <Correction />
        </>

    )
}

export default CorrectionPage
