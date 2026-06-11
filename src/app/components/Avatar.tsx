interface AvatarProps {
  emoji: string;
  color: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  photo?: string;
  name?: string;
}

const sizeMap = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-11 h-11 text-lg',
  lg: 'w-16 h-16 text-2xl',
  xl: 'w-22 h-22 text-4xl'
};

export function Avatar({ emoji, color, size = 'md', photo, name }: AvatarProps) {
  return (
    <div
      className={`${sizeMap[size]} rounded-full flex items-center justify-center border-[1.5px] overflow-hidden`}
      style={{
        backgroundColor: `${color}1f`,
        borderColor: color
      }}
    >
      {photo ? (
        <img
          src={photo}
          alt={name || ''}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />
      ) : (
        <span>{emoji}</span>
      )}
    </div>
  );
}
