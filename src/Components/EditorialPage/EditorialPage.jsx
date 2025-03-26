import React from 'react'
import EditorialBoard from '../../Shared/Components/EditorialBoard/EditorialBoard'
import HelmetComponent from '../Helmet/HelmetProvider'

function EditorialPage() {
    return (
        <>
            <HelmetComponent title="Editorial Board - International Journal of Quantum Computing and AI" />
            <EditorialBoard />
        </>
    )
}

export default EditorialPage
