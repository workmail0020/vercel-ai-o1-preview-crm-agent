import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Upload, File, Users } from "lucide-react";

import { uploadFile } from "./actions";
export default function Component() {
  // Sample data for contacts
  const contacts = [
    {
      name: "Amanda Brown",
      email: "amanda.brown@example.com",
      position: "Data Scientist",
      company: "AutoCorp",
    },
    {
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      position: "CEO",
      company: "BioGen",
    },
    {
      name: "Michael Jackson",
      email: "michael.jackson@example.com",
      position: "CTO",
      company: "AutoCorp",
    },
    {
      name: "Emily Brown",
      email: "emily.brown@example.com",
      position: "Data Scientist",
      company: "FinSys",
    },
    {
      name: "Alex White",
      email: "alex.white@example.com",
      position: "Data Scientist",
      company: "RetailHub",
    },
    {
      name: "Alex Smith",
      email: "alex.smith@example.com",
      position: "UX Designer",
      company: "EcoLabs",
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-primary rounded-lg">
              <Users className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Contacts Hub</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Import and manage your customer contacts with ease
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Import Contacts
          </h2>
          <form action={uploadFile} className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4">
              <div className="flex-1 min-w-0">
                <Label htmlFor="file-upload" className="text-sm font-semibold text-foreground mb-3 block">
                  Select CSV File
                </Label>
                <div className="relative">
                  <input
                    id="file-upload"
                    name="file"
                    type="file"
                    className="sr-only"
                    aria-describedby="file-upload-desc"
                    accept=".csv"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center justify-center px-6 py-8 border-2 border-dashed border-border rounded-xl cursor-pointer hover:bg-muted/50 transition-colors"
                  >
                    <File className="w-8 h-8 text-muted-foreground mb-2" />
                    <span className="text-sm font-medium text-foreground">
                      Choose file or drag and drop
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
                      CSV files only
                    </span>
                  </label>
                  <p id="file-upload-desc" className="mt-2 text-xs text-muted-foreground">
                    Upload a CSV file with Name, Email, Position, and Company columns
                  </p>
                </div>
              </div>
              <Button className="md:self-end">
                <Upload className="mr-2 h-4 w-4" /> Upload
              </Button>
            </div>
          </form>
        </div>

        {/* Contacts Table Section */}
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Recent Contacts
          </h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="text-foreground font-semibold">Name</TableHead>
                  <TableHead className="text-foreground font-semibold">Position</TableHead>
                  <TableHead className="text-foreground font-semibold">Company</TableHead>
                  <TableHead className="text-foreground font-semibold">Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact, id) => (
                  <TableRow key={id} className="border-border hover:bg-muted/50">
                    <TableCell className="font-medium text-foreground">
                      {contact.name}
                    </TableCell>
                    <TableCell className="text-foreground">
                      {contact.position}
                    </TableCell>
                    <TableCell className="text-foreground">
                      {contact.company}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {contact.email}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </main>
  );
}
