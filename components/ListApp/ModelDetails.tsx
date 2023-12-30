import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitData } from "../Form/Form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SuccessModel } from "../Form/SuccessModel";
import { useEffect, useState } from "react";
import axios from "axios";
import { endPoint } from "../dev";
import { ScrollArea } from "../ui/scroll-area";
import { SelectStatus } from "../SelectStatus";
import { DeleteIcon, Trash2Icon } from "lucide-react";
import { toast } from "react-toastify";

export function ModelDetails({
  Open,
  setOpenDetails,
  submission,
  email,
  id,
  status,
}: any) {
  // const [application, setApplication] = useState<any>();
  console.log(submission);
  const fields = Object.entries(submission);
  const [selectedStatus, setSelectedStatus] = useState(""); // State to store selected status
  console.log(selectedStatus);

  const handleStatusChange = async (e: any) => {
    setSelectedStatus(e);
  };
  const deleteSubmission = async (id: any) => {
    try {
      const response = await axios.delete(
        `${endPoint}/submit-form/${id}?key=f70c7525463c`
      ); // Replace with your endpoint
      window.location.reload();
      console.log(response.data); // Log the deleted submission data or handle it as needed
      // Optionally, update your UI or perform other actions after successful deletion
    } catch (error) {
      console.error("Error deleting submission:", error);
      // Handle error scenario - show an error message or perform other actions
    }
  };
  return (
    <Dialog onOpenChange={() => setOpenDetails(!Open)} open={Open}>
      <DialogContent className="w-full h-[90vh] overflow-hidden sm:max-w-[90%]">
        <DialogHeader>
          <DialogTitle className="text-4xl">View Application</DialogTitle>
          <DialogDescription>Just View Application</DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-between pr-4">
          <div className="flex items-center gap-2">
            <button className="px-6 py-3 text-white bg-black rounded-xl">
              Download CSV
            </button>
            <button className="px-6 py-3 text-white bg-black rounded-xl">
              Download PDF
            </button>
            {/* <select value={selectedStatus} onChange={handleStatusChange}>
            <option value="">Select Status</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select> */}
            <SelectStatus
              defaultValue={status}
              handleStatusChange={handleStatusChange}
            />
            <button
              className="px-6 py-3 text-white bg-black rounded-xl"
              onClick={async () => {
                try {
                  const response: any = await axios.post(
                    `${endPoint}/admin/status/email`,
                    {
                      email,
                      status: selectedStatus,
                    }
                  );
                  console.log(response);

                  if (response.data.code === 200) {
                    window.location.reload();
                  }
                  toast.success(response.data.message, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                  });
                } catch (error) {
                  console.error("Error sending email:", error);
                }
              }}
            >
              Send Email
            </button>
          </div>
          <div className="">
            <button onClick={() => deleteSubmission(id)}>
              <Trash2Icon />
            </button>
          </div>
        </div>
        <ScrollArea className="rounded-md  h-[81vh] border px-8 mb-9 py-6">
          {fields.map(([key, value]: any) => (
            <div key={key} className="px-2">
              {/* <label
                className="!my-2 text-base font-medium capitalize"
                htmlFor={key}
              >
                {key}
              </label>
              <Input
                className="outline-none w-full "
                title={value}
                defaultValue={value}
                type="email"
                name={key}
                id={key}
                value={value}
                placeholder="Email"
              /> */}
              <div className="mb-5">
                <label
                  htmlFor={key}
                  className="block mb-2 capitalize text-sm font-medium text-gray-900 dark:text-white"
                >
                  {key}
                </label>
                <input
                  value={value}
                  type="email"
                  id="email"
                  className="bg-gray-50 border capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
            </div>
          ))}
        </ScrollArea>
        <DialogFooter>
          <Button onClick={() => setOpenDetails(null)}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
