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
import { Upload, File, Users, ArrowRight } from "lucide-react";

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:py-8">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary p-2.5">
              <Users className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Contact Manager
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Import and manage your business contacts
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8 sm:py-12">
        {/* Upload Section */}
        <div className="mb-12">
          <div className="rounded-xl border border-border bg-card p-8 sm:p-10 shadow-sm">
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Import Contacts
            </h2>
            <p className="mb-8 text-sm text-muted-foreground">
              Upload a CSV file to quickly add contacts to your system
            </p>

            <form action={uploadFile} className="flex flex-col gap-6 sm:flex-row sm:items-end">
              <div className="flex-1">
                <Label
                  htmlFor="file-upload"
                  className="block text-sm font-medium text-foreground mb-3"
                >
                  Select File
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
                    className="flex items-center justify-center gap-3 rounded-lg border-2 border-dashed border-border bg-secondary px-6 py-8 cursor-pointer transition-colors hover:bg-primary/5 hover:border-primary"
                  >
                    <File className="h-5 w-5 text-muted-foreground" />
                    <div className="text-center">
                      <p className="text-sm font-medium text-foreground">
                        Choose CSV file
                      </p>
                      <p className="text-xs text-muted-foreground">
                        or drag and drop
                      </p>
                    </div>
                  </label>
                  <p
                    id="file-upload-desc"
                    className="mt-2 text-xs text-muted-foreground"
                  >
                    Supported format: CSV with columns for Name, Email, Position,
                    Company
                  </p>
                </div>
              </div>
              <Button size="lg" className="gap-2 sm:self-start">
                <Upload className="h-4 w-4" />
                Upload
              </Button>
            </form>
          </div>
        </div>

        {/* Contacts Table Section */}
        <div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-foreground">
              Your Contacts
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage and view all imported contacts
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
            <Table>
              <TableHeader className="bg-secondary/50">
                <TableRow className="border-b border-border hover:bg-secondary/50">
                  <TableHead className="font-semibold text-foreground">
                    Name
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Position
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Company
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Email
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact, id) => (
                  <TableRow
                    key={id}
                    className="border-border hover:bg-secondary/30 transition-colors"
                  >
                    <TableCell className="font-medium text-foreground">
                      {contact.name}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {contact.position}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
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

          <div className="mt-6 flex items-center justify-between rounded-lg border border-border bg-card p-4">
            <div>
              <p className="text-sm font-medium text-foreground">
                {contacts.length} contacts imported
              </p>
              <p className="text-xs text-muted-foreground">
                Ready to sync with your CRM
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              Sync Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
