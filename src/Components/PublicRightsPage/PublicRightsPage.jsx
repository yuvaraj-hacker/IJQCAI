import React from 'react'
import PublicRights from '../../Shared/Components/PublicationRights/PublicRights'
import HelmetComponent from '../Helmet/HelmetProvider'

function PublicRightsPage() {
    return (
        <>
            <HelmetComponent title="Publication Rights - International Journal of Quantum Computing and AI" />
            <PublicRights />
        </>
    )
}

export default PublicRightsPage
