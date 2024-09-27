import dotenv from "dotenv"
dotenv.config()
import express, { Application, Request, Response } from "express"
import cors from "cors"
import OpenAI from "openai"

const app: Application = express()
// Prevent cors errors
app.use(cors())
// Parse JSON bodies
app.use(express.json())

const PORT: number = 8000
const apiKey: string = process.env.API_KEY || ""

const openai = new OpenAI({ apiKey })

app.post("/api/completions", async (req: Request, res: Response) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: "Provide only the SQL query to " + req.body.message,
        },
      ],
    })
    res.status(200).json(completion.choices[0].message)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server error" })
  }
})

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`)
// })

export default app
