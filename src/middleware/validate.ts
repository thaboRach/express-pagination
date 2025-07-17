import { Request, Response, NextFunction } from "express";
import { ZodObject } from "zod";

type ValidationTarget = "body" | "query" | "params";

export function validate(schema: ZodObject, target: ValidationTarget = "body") {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[target]);
    if (!result.success) {
      const errors = result.error.issues.map((err) => ({
        path: err.path.join("."),
        message: err.message,
      }));
      return res.status(400).json({ errors });
    }

    // Attach validated data
    (req as any)[`validated${capitalize(target)}`] = result.data;
    next();
  };
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
