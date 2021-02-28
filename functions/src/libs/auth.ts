export const addUser = async (db: any, user: any) => {
  try {
    const now = new Date(user.metadata.creationTime);
    await db.collection("users").doc(user.uid).set({
      name: user.displayName, // ユーザーの名前
      icon: user.photoURL, // ユーザーの画像のパス
      createdAt: now, // 作成日
      updatedAt: now, // 更新日
    });
  } catch (e) {
    console.error(e);
  }
  return;
};
