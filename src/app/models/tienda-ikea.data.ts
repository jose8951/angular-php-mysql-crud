export interface ProductoGenerico {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: string;
}

export const DATOS_GENERICOS = {
  categoriasPrincipales: [
    'Salones',
    'Dormitorios',
    'Cocinas',
    'Oficinas',
    'Decoración',
    'Exterior',
  ],

  ofertasDestacadas: [
    {
      titulo: 'Nueva Colección',
      subtitulo: 'Transforma tu hogar con un juego de diseño.',
      imagen:
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=900&h=400&auto=format&fit=crop',
      fondoColor: '#f0f0f0',
    },
    {
      titulo: 'Inspírate',
      subtitulo: 'Ideas frescas para cada rincón.',
      imagen:
        'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=400&h=300&auto=format&fit=crop',
    },
  ],

  productos: [
    {
      id: 'p1',
      nombre: 'Mesa Nórdica',
      descripcion: 'Madera clara minimalista.',
      precio: 89.99,
      categoria: 'Salones',
      imagen:
        'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=500',
    },
    {
      id: 'p2',
      nombre: 'Silla Pro',
      descripcion: 'Ergonomía para tu oficina.',
      precio: 129.0,
      categoria: 'Oficinas',
      imagen:
        'https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=500',
    },
    {
      id: 'p3',
      nombre: 'Lámpara Moderna',
      descripcion: 'Estilo industrial cálido.',
      precio: 55.5,
      categoria: 'Decoración',
      imagen:
        'https://images.unsplash.com/photo-1507473885765-e6ed657f9971?q=80&w=500',
    },
    {
      id: 'p4',
      nombre: 'Estantería Roble',
      descripcion: 'Almacenaje elegante.',
      precio: 75.0,
      categoria: 'Dormitorios',
      imagen:
        'https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=500',
    },
    {
      id: 'p5',
      nombre: 'Mesa Nórdica',
      descripcion: 'Madera clara minimalista.',
      precio: 89.99,
      categoria: 'Salones',
      imagen:
        'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=500',
    },
    {
      id: 'p6',
      nombre: 'Silla Pro',
      descripcion: 'Ergonomía para tu oficina.',
      precio: 129.0,
      categoria: 'Oficinas',
      imagen:
        'https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=500',
    },
    {
      id: 'p7',
      nombre: 'Lámpara Moderna',
      descripcion: 'Estilo industrial cálido.',
      precio: 55.5,
      categoria: 'Decoración',
      imagen:
        'https://images.unsplash.com/photo-1507473885765-e6ed657f9971?q=80&w=500',
    },
    {
      id: 'p8',
      nombre: 'Estantería Roble',
      descripcion: 'Almacenaje elegante.',
      precio: 75.0,
      categoria: 'Dormitorios',
      imagen:
        'https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=500',
    },
       {
      id: 'p9',
      nombre: 'Mesa Nórdica',
      descripcion: 'Madera clara minimalista.',
      precio: 89.99,
      categoria: 'Salones',
      imagen:
        'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=500',
    },
    {
      id: 'p10',
      nombre: 'Silla Pro',
      descripcion: 'Ergonomía para tu oficina.',
      precio: 129.0,
      categoria: 'Oficinas',
      imagen:
        'https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=500',
    },
    {
      id: 'p11',
      nombre: 'Lámpara Moderna',
      descripcion: 'Estilo industrial cálido.',
      precio: 55.5,
      categoria: 'Decoración',
      imagen:
        'https://images.unsplash.com/photo-1507473885765-e6ed657f9971?q=80&w=500',
    },
    {
      id: 'p12',
      nombre: 'Estantería Roble',
      descripcion: 'Almacenaje elegante.',
      precio: 75.0,
      categoria: 'Dormitorios',
      imagen:
        'https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=500',
    },
    {
      id: 'p13',
      nombre: 'Mesa Nórdica',
      descripcion: 'Madera clara minimalista.',
      precio: 89.99,
      categoria: 'Salones',
      imagen:
        'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=500',
    },
    {
      id: 'p14',
      nombre: 'Silla Pro',
      descripcion: 'Ergonomía para tu oficina.',
      precio: 129.0,
      categoria: 'Oficinas',
      imagen:
        'https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=500',
    },
    {
      id: 'p15',
      nombre: 'Lámpara Moderna',
      descripcion: 'Estilo industrial cálido.',
      precio: 55.5,
      categoria: 'Decoración',
      imagen:
        'https://images.unsplash.com/photo-1507473885765-e6ed657f9971?q=80&w=500',
    },
    {
      id: 'p16',
      nombre: 'Estantería Roble',
      descripcion: 'Almacenaje elegante.',
      precio: 75.0,
      categoria: 'Dormitorios',
      imagen:
        'https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=500',
    },
       {
      id: 'p17',
      nombre: 'Lámpara Moderna',
      descripcion: 'Estilo industrial cálido.',
      precio: 55.5,
      categoria: 'Decoración',
      imagen:
        'https://images.unsplash.com/photo-1507473885765-e6ed657f9971?q=80&w=500',
    },
    {
      id: 'p18',
      nombre: 'Estantería Roble',
      descripcion: 'Almacenaje elegante.',
      precio: 75.0,
      categoria: 'Dormitorios',
      imagen:
        'https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=500',
    },
  ] as ProductoGenerico[],
};
