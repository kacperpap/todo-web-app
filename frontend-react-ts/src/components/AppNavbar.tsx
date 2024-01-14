import {IconFolderPlus, IconLayoutList, IconListCheck, IconPencilPlus} from "@tabler/icons-react";
import {NavLink} from "@mantine/core"
import {useNavigate} from "react-router-dom";

export const AppNavbar = () => {

    const navigate = useNavigate();

    return (
        <div>
            <NavLink onClick={() => navigate('/todo')} label="Lista TODO"
                     leftSection={<IconListCheck size="1rem" stroke={1.5}/>}/>
            <NavLink onClick={() => navigate('/todo/new')} label="Dodaj TODO"
                     leftSection={<IconPencilPlus size="1rem" stroke={1.5}/>}/>
            <NavLink onClick={() => navigate('/group-todo')} label="Lista grup TODO"
                     leftSection={<IconLayoutList size="1rem" stroke={1.5}/>}/>
            <NavLink onClick={() => navigate('/group-todo/new')} label="Dodaj listę TODO"
                     leftSection={<IconFolderPlus size="1rem" stroke={1.5}/>}/>
        </div>
    )
}