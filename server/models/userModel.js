import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide your name"],
        },
        email: {
            type: String,
            required: [true, "Please provide your email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please provide a password"],
            select: false
        },
        role: {
            type: String,
            required: true,
            enum: ['user', 'admin'],
            default: 'user',
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", UserSchema);

//  method to remove password from the user object, however it can simply be done by using the select property in the password field
UserSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
};


export default User;