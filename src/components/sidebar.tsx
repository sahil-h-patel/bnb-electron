import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SquareUser, CreditCard, Mail, Smartphone } from "lucide-react";
import Union from '../assets/union-dark.svg';
import Timer from '../assets/timer-dark.svg';
import BnBLockUpDark from '../assets/bnblockup-dark.svg';
import { ReactElement, SetStateAction, useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { DialogHeader, DialogFooter } from "./ui/dialog";
import { FloatingLabelInput } from "./ui/floating-label-input";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

type SidebarProps = {
    variant: 'cart' | 'receipt'; // The new variant prop
};

export function Sidebar({ variant }: SidebarProps) {
    return (
        <div className="w-[30%] bg-primary/30 m-3 p-2 pb-0 gap-y-1 rounded-2xl flex flex-col justify-between items-center">
            <div className="items-center pt-4">
                {variant === 'cart' && (
                    <Link to="/">
                        <Button variant='secondary' className="rounded-xl px-[4.25rem] py-8 text-sm">
                            Cancel Transaction
                        </Button>
                    </Link>
                )}
                {variant === 'receipt' && (
                    <Link to="/">
                        <Button variant='outline' className="rounded-xl px-[4.25rem] py-8 text-sm bg-transparent border-secondary">
                            Finish Transaction
                        </Button>
                    </Link>
                )}
            </div>

            <div className="flex flex-col gap-y-4">
                <p className="font-bold text-center">Current User Information</p>
                <div className="flex flex-col gap-y-4">
                    <UserInfoField icon={<SquareUser />} field={{ label: "Name", value: "John Doe" }} />
                    <UserInfoField icon={<CreditCard />} field={{ label: "Card", value: "Dining Dollars" }} />
                    <UserInfoField icon={<Mail />} field={{ label: "Email", value: "None" }} />
                    <UserInfoField icon={<Smartphone />} field={{ label: "Phone", value: "None" }} />
                </div>
                <EditButton />
            </div>

            <>
                {variant === 'cart' && (
                    <div className="flex flex-row items-center gap-x-3">
                        <img className='w-7 h-7' src={Union} alt="" />
                        Finished? Close the door
                    </div>
                )}
                {variant === 'receipt' && (
                    <div className="flex flex-row items-center justify-center gap-x-0.5">
                        <img className='w-16 h-16 object-contain' src={Timer} alt="Timer Icon" />
                        <div className="h-16 flex flex-col justify-center text-sm w-7/12 ">
                            <p className="text-sm font-bold leading-none">Press finish or wait for the session to time out</p>
                            <p className="text-xs leading-none">If you are having troubles contact your nearest CSHer</p>
                        </div>
                    </div>
                )}
            </>

            <Separator className="bg-foreground/15" />
            <img className='mb-6' src={BnBLockUpDark} alt="Bits & Bytes" />
        </div>
    );
}

type UserInfoFieldProps = {
    icon: ReactElement,
    field: { label: string, value: string }
};

function UserInfoField({ icon, field }: UserInfoFieldProps) {
    return (
        <div className="flex flex-row gap-x-4">
            {icon}
            <p>{field.label}: {field.value}</p>
        </div>
    )
}
function EditButton() {
    // State for each input field
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // State to track the active input
    const [activeInput, setActiveInput] = useState("email");

    const handleKeyboardChange = (input: SetStateAction<string>) => {
        if (activeInput === "email") {
            setEmail(input);
        } else if (activeInput === "phone") {
            setPhone(input);
        }
    };

    const getInputValue = () => {
        return activeInput === "email" ? email : phone;
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline' className="rounded-xl bg-transparent border-secondary border-2 px-[4.25rem] text-sm hover:bg-transparent">
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit your contact</DialogTitle>
                    <DialogDescription>Please provide a phone number or email to recieve a reciept of this transaction</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-y-4">
                    <FloatingLabelInput
                        id="email"
                        label="Email"
                        value={email}
                        onFocus={() => setActiveInput("email")}
                    />
                    <FloatingLabelInput
                        id="phone-number"
                        label="Phone Number"
                        value={phone}
                        onFocus={() => setActiveInput("phone")}
                    />
                </div>
                <Keyboard
                    theme={"hg-theme-default hg-theme-dark"}
                    onChange={handleKeyboardChange}
                    inputName={activeInput}
                    inputValue={getInputValue()}
                />
                <DialogFooter className="flex flex-row gap-x-2">
                    <DialogClose asChild>
                        <Button variant="default" className="w-full">Cancel</Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button variant="outline" className="w-full">Submit</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}