import { 
  users, type User, type InsertUser,
  contactSubmissions, type ContactSubmission, type InsertContact,
  type ContactFormData
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(data: ContactFormData & { createdAt: string }): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, ContactSubmission>;
  currentId: number;
  contactId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.currentId = 1;
    this.contactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(data: ContactFormData & { createdAt: string }): Promise<ContactSubmission> {
    const id = this.contactId++;
    const contact: ContactSubmission = { ...data, id };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
