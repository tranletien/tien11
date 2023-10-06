import { Link, useNavigate, useParams } from "react-router-dom";
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import ContactService from "../../../Service/ContactService";
import { useEffect, useState } from "react";
function ContactShow() {
    const navigate = useNavigate();

    const { id } = useParams("id")
    const [contact, setContact] = useState([]);
    useEffect(function () {
        (async function () {
            await ContactService.getById(id).then(function (result) {
                setContact(result.data.contacts)
            });
        })();
    }, [])
    function contactDelete(id) {
        ContactService.remove(id).then(function (result) {
            alert(result.data.message);
            navigate("/admin/contact", { replace: true });

        })
    }

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Chi Tiết liên hệ</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success me-1" to="/admin/contact">
                            về danh sách
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/contact/update/" + contact.id}>
                            <FaRegEdit /> Sửa
                        </Link>
                        <button onClick={() => contactDelete(contact.id)} className="btn btn-sm btn-danger">
                            <FaTrash />
                        </button>

                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th style={{ width: 200 }}>Tên Trường</th>
                            <th>Gía Trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>{contact.id}</th>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>{contact.name}</th>
                        </tr>
                        <tr>
                            <th>email</th>
                            <th>{contact.email}</th>
                        </tr>
                        <tr>
                            <th>phone</th>
                            <th>{contact.phone}</th>
                        </tr>
                        <tr>
                            <th>content</th>
                            <th>{contact.content}</th>
                        </tr>
                        <tr>
                            <th>user_id</th>
                            <th>{contact.user_id}</th>
                        </tr>
                        <tr>
                            <th>replay_id</th>
                            <th>{contact.replay_id}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ContactShow;