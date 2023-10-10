import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Button } from '../Button';

interface HireMeDialogProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const HireMeDialog = ({open, setOpen}: HireMeDialogProps) => {

    return (
        <Dialog open={open} onClose={()=>setOpen(false)}>
            <DialogTitle className='bg-mid-gray'>
                <span>Titulo del dialogo</span>
            </DialogTitle>
            <DialogContent className='bg-mid-gray'>
                <div className='flex flex-col gap-2'>
                <span>Contenido del dialogo</span>
                <div className='flex gap-2 justify-center'>

                </div>
                    </div>
            </DialogContent>
        </Dialog>
    );

}

export {HireMeDialog};