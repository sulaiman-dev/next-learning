import { useRouter } from 'next/router';

export default function ProductDetail() {
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <h3>Detail of Product:{productId}</h3>
    )
}