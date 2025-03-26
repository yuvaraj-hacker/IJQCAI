import React from 'react'
import Copyrights from '../../Shared/Components/Copyrights/Copyrights'
import HelmetComponent from '../Helmet/HelmetProvider'

function CopyrightsPage() {
    return (
        <>
            <HelmetComponent title="Copyrights - International Journal of Quantum Computing and AI" />
            <Copyrights />
        </>
    )
}

export default CopyrightsPage
