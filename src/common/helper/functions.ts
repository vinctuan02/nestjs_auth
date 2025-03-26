import * as bcrypt from 'bcrypt';

export async function hashPassword(password: string): Promise<string> {
    try {
        const saltRounds: number = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw new Error(`Error hashing password: ${error.message}`);
    }
}

// Hàm kiểm tra mật khẩu (tùy chọn, nếu bạn cần so sánh sau này)
export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch;
    } catch (error) {
        throw new Error(`Error comparing password: ${error.message}`);
    }
}