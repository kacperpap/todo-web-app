import {useEffect, useState} from "react";
import {Pagination, SimpleGrid} from "@mantine/core";
import {GroupTodoType} from "../../types/GroupTodoType";
import {listGroupTodo} from "./api/group-todo";
import {GroupTodoListItem} from "./GroupTodoListItem";
import {useNavigate} from "react-router-dom";


export const GroupTodoList = () => {
    const [data, setData] = useState<GroupTodoType[]>([]);
    const [currentPage,setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const navigate = useNavigate();

    useEffect(() => {
        listGroupTodo().then((response) => setData(response))}, [])

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleItemClick = (id: number) => {
        navigate(`/todo/${id}`);
    }

    return (
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '85vh', overflow: 'hidden'}}>
            <SimpleGrid cols={{base: 1, sm: 2, lg: 3}}>
                {paginatedData.map((item) => <GroupTodoListItem key={item.id} item={item} onClick={() => handleItemClick(item.id)} />)}
            </SimpleGrid>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
                <Pagination total={Math.ceil(data.length / itemsPerPage)} radius="xl" withEdges onChange={handlePageChange} />
            </div>
        </div>
    )
}