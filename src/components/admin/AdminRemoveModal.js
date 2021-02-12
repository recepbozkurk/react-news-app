import React, { useContext } from 'react'
import AdminContext from '../../context/admin/adminContext'

const AdminRemoveModal = () => {
    const {item, removeNews} = useContext(AdminContext)

    const removeNewsItem = (e) => {
        console.log("Remove id: ", item)
        e.preventDefault()

        removeNews(item.id)
    }

    return (
        <div className="modal fade" tabIndex="-1" role="dialog" id="removeModal">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-warning" style={{ color: 'white' }}>
                        <h5 className="modal-title">Haberi silmek istiyor musunuz?</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-footer bg-warning">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Vazgeç</button>
                        <button type="button" data-dismiss="modal" className="btn btn-danger" onClick={removeNewsItem}>Evet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminRemoveModal