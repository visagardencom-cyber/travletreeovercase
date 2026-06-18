'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/db'
import { User } from '@/lib/types'
import { useEffect, useState } from 'react'

export function useUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser()
      return user as User | null
    },
  })
}

export function useEntities(organizationId: string) {
  return useQuery({
    queryKey: ['entities', organizationId],
    queryFn: async () => {
      const response = await fetch(`/api/entities?organizationId=${organizationId}`)
      const data = await response.json()
      return data.entities as any[]
    },
    enabled: !!organizationId,
  })
}

export function useRecommendations(organizationId: string) {
  return useQuery({
    queryKey: ['recommendations', organizationId],
    queryFn: async () => {
      const response = await fetch(`/api/recommendations?organizationId=${organizationId}`)
      const data = await response.json()
      return data.recommendations as any[]
    },
    enabled: !!organizationId,
  })
}

export function useTrustScore(organizationId: string) {
  return useQuery({
    queryKey: ['trust-score', organizationId],
    queryFn: async () => {
      const response = await fetch(`/api/trust-score?organizationId=${organizationId}`)
      const data = await response.json()
      return data
    },
    enabled: !!organizationId,
  })
}