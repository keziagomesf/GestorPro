"use client"

import { useContext, useState } from 'react';
import { CustomerProps } from '@/utils/customer.type';
import { TicketProps } from '@/utils/ticket.type'
import {FiCheckSquare, FiFile} from 'react-icons/fi'
import { api } from '@/lib/api';
import { useRouter, useSearchParams } from 'next/navigation'


import { ModalContext } from '@/providers/modal';

interface TicktItemProps{
    ticket: TicketProps;
    customer: CustomerProps | null;
}

export function TicketItem({customer, ticket}: TicktItemProps){
    const router = useRouter();
    const { handleModalVisible, setDetailTicket } = useContext(ModalContext)
    const [chamadoFechado, setChamadoFechado] = useState(false)

    async function handleChangeStatus(){
        if(chamadoFechado) return;

        const confirmar = window.confirm("Tem certeza que quer fechar esse chamado?");
        if (confirmar){
            try{
            await api.patch("/api/ticket", {
                id: ticket.id,
            })
            setChamadoFechado(true)
            router.refresh();
        }catch(err){
            console.log(err)
        }
    }}

    function handleOpenModal(){
        handleModalVisible();
        setDetailTicket({
            customer: customer,
            ticket: ticket
        })
    }
    return(
        <>
        <tr className='border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-100 hover:bg-gray-200 duration-300'>
            <td className='text-left pl-1'>
                {customer?.name}
            </td>
            <td className='text-left hidden sm:table-cell'>
                {ticket.created_at?.toLocaleDateString("pt-br")}
            </td>
            <td className='text-left'>
                <span className="bg-green-500 px-2 py-1 rounded">{ticket.status}</span>
            </td>
            <td className='text-left'>
                <button className='mr-3 cursor-pointer' onClick={handleChangeStatus}>
                    <FiCheckSquare size={24} color='#131313' />
                </button>
                <button className='cursor-pointer' onClick={handleOpenModal} >
                    <FiFile size={24} color='#3b82f6' />
                </button>
            </td>
        </tr>
        </>
    )
}