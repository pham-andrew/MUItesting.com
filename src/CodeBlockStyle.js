export const CodeBlockStyle = {
    display: 'block',
    p: 1,
    m: 1,
    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
    color: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
    border: '1px solid',
    borderColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
    borderRadius: 2,
    fontSize: '0.875rem',
    fontWeight: '700',
}