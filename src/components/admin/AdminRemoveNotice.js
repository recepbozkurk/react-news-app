import React, { useContext } from 'react'
import AdminContext from '../../context/admin/adminContext'

const AdminRemoveNotice = () => {
    const {notice, removeNotices} = useContext(AdminContext)

    const removeNoticesItem = (e) => {
        e.preventDefault()

        removeNotices(notice.id)
    }

    return (
        <div className="modal fade" tabIndex="-1" role="dialog" id="removeNotice">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-warning" style={{ color: 'white' }}>
                        <h5 className="modal-title">Duyuruyu silmek istiyor musunuz?</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-footer bg-warning">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Vazgeç</button>
                        <button type="button" data-dismiss="modal" className="btn btn-danger" onClick={removeNoticesItem}>Evet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminRemoveNotice