'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useEditMode } from './EditModeContext'

interface EditableTextProps {
  id: string
  initialValue: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  className?: string
  multiline?: boolean
}

export default function EditableText({
  id,
  initialValue,
  as = 'p',
  className = '',
  multiline = false,
}: EditableTextProps) {
  const { editMode } = useEditMode()
  const [value, setValue] = useState(initialValue)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  // Update local value when initialValue changes (e.g., from server)
  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const handleSave = async () => {
    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: id, value }),
      })

      if (!response.ok) {
        const error = await response.json()
        console.error('Failed to save content:', error)
      }
    } catch (error) {
      console.error('Error saving content:', error)
    }
  }

  const handleBlur = () => {
    handleSave()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!multiline && e.key === 'Enter') {
      e.preventDefault()
      inputRef.current?.blur()
    }
  }

  if (!editMode) {
    // Render as regular text element
    const Component = as
    return <Component className={className}>{value}</Component>
  }

  // Render as editable input
  const isInline = as === 'span'
  const inputClassName = `${isInline ? 'inline-block' : 'w-full'} bg-transparent border border-[#007AFF]/30 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#007AFF]/50 focus:border-[#007AFF] ${className}`

  if (multiline) {
    return (
      <textarea
        ref={inputRef as React.RefObject<HTMLTextAreaElement>}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        className={inputClassName}
        rows={3}
      />
    )
  }

  return (
    <input
      ref={inputRef as React.RefObject<HTMLInputElement>}
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className={inputClassName}
    />
  )
}

