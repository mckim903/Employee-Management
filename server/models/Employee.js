import mongoose from "mongoose"
import { DEPARTMENTS } from "../constants/departments.js";


const employeeSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true},
    firstName: {type: String, rrequired: true},
    lastName: {type: String, rrequired: true},
    email: {type: String, rrequired: true},
    phone: {type: String, rrequired: true},
    position: {type: String, rrequired: true},
    basicSalary: {type: Number, default: 0},
    allowances: {type: Number, default: 0},
    deductions: {type: Number, default: 0},
    employmentStatus: {type: String, enum: ["ACTIVE", "INACTIVE"], default: "ACTIVE"},
    joinDate: {type: Date, rrequired: true},
    isDeleted: {type: Boolean, rrequired: false},
    bio: {type: String, default: ""},
    department: {type: String, enum: DEPARTMENTS}
}, {timestamps: true})

const Employee = mongoose.models.Employee || mongoose.model("Employee", employeeSchema)

export default Employee;