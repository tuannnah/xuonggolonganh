"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function createProduct(formData: FormData) {
  const name = formData.get("name")?.toString() || ""
  const price = formData.get("price")?.toString() || ""
  const category = formData.get("category")?.toString() || ""
  const tag = formData.get("tag")?.toString()
  const imageUrl = formData.get("imageUrl")?.toString() || ""
  const images = formData.get("images")?.toString() || null
  const description = formData.get("description")?.toString()
  
  if (!name || !price || !category || !imageUrl) {
    throw new Error("Missing required fields")
  }

  await prisma.product.create({
    data: {
      name,
      price,
      category,
      tag,
      imageUrl,
      images,
      description
    } as any
  })

  revalidatePath("/")
  revalidatePath("/admin")
}

export async function deleteProduct(id: string) {
  if (!id) return;
  await prisma.product.delete({
    where: { id }
  })
  revalidatePath("/")
  revalidatePath("/admin")
}

export async function updateProduct(id: string, formData: FormData) {
  const name = formData.get("name")?.toString()
  const price = formData.get("price")?.toString()
  const category = formData.get("category")?.toString()
  const tag = formData.get("tag")?.toString()
  const imageUrl = formData.get("imageUrl")?.toString()
  const images = formData.get("images")?.toString()
  const description = formData.get("description")?.toString()

  await prisma.product.update({
    where: { id },
    data: {
      name: name || undefined,
      price: price || undefined,
      category: category || undefined,
      tag,
      imageUrl: imageUrl || undefined,
      images: images !== undefined ? images : undefined,
      description
    } as any
  })

  revalidatePath("/")
  revalidatePath("/admin")
}
