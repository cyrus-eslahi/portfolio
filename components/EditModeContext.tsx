'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface EditModeContextType {
  editMode: boolean
  setEditMode: (value: boolean) => void
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined)

export function EditModeProvider({ children }: { children: React.ReactNode }) {
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.ctrlKey &&
        event.shiftKey &&
        event.altKey &&
        event.code === 'KeyP'
      ) {
        event.preventDefault()
        setEditMode((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <EditModeContext.Provider value={{ editMode, setEditMode }}>
      {children}
      {editMode && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#007AFF]/90 text-white px-6 py-3 text-center text-sm font-medium backdrop-blur-sm">
          Edit mode ON – changes are live
        </div>
      )}
    </EditModeContext.Provider>
  )
}

export function useEditMode() {
  const context = useContext(EditModeContext)
  if (context === undefined) {
    throw new Error('useEditMode must be used within an EditModeProvider')
  }
  return context
}

