import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password, role } = req.body;
    // check if these fields are empty
    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    // check if the account is already exist
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exist with this email.",
        success: false,
      });
    }
    // hashing password
    const hashedPassword = await bcrypt.hash(password, 10);

    //create user now

    await User.create({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
        message: "Account created successfully.",
        success: true
    })

  } catch (error) {
    console.log(error)
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    // check if these fields are empty
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    // check if the account exist or not
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email address.",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect password.",
        success: false,
      });
    }

    // check roel is correct or not
    if(role !== user.role ) {
        return res.status(400).json({
            message: "Account does not exist with current role",
            success: false
        })
    }

    // creating cookies and storing token using jsonwebtoken

    const tokenData = {
        userId: user._id
    }
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' })

    user = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        profile: user.profile
    }

    return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' })
    .json({
        message: `Welcome back ${user.fullName}`,
        user,
        success: true
    })

  } catch (error) {
    console.error("Error in login:", error);

  }
};


export const logout = async (req,res) => {
    try {
        return res.status(200).cookie("token", "", {maxAge:0}).json({
            message: 'Logged out successfully',
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}

//update Profile

export const updateProfile = async (req,res) => {
    try {
        const {fullName, email, phoneNumber, bio, skills} = req.body
        const file = req.file
        

        // cloudinary comes here
        let skillsArray;
        if(skills) {
            skillsArray = skills.split(",")
        }
        const userId = req.id;
        let user = await User.findById(userId)

        if(!user) {
            return res.status(400).json({
                message: "User not found",
                success: false
            })
        }

        // updating data

        if(fullName) user.fullName = fullName
        if(email) user.email = email
        if(phoneNumber) user.phoneNumber = phoneNumber
        if(bio) user.profile.bio = bio
        if(skills) user.profile.skills = skillsArray

        await user.save();

        user = {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).json({
            message: "Profile updated successfully",
            success: true,
            user

        })

    } catch (error) {
        console.log(error)
    }
}
